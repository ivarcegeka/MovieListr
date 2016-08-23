import {Component, OnInit} from "@angular/core";
import {Movie} from "../../db-module/movie.class";
import {MovieService} from "../../db-module/movie.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'editform-component.html',
    styleUrls: ['editform.css'],
    providers: [MovieService]
})
export class EditForm implements OnInit {

    public model;
    public error;

    constructor(private movieService: MovieService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route
            .params
            .subscribe(params => {
                let selectedId = params['id'];
                if (selectedId) {
                    this.movieService
                        .getMovie(selectedId)
                        .then((data) => {
                            if (data.movies.length > 0) {
                                this.model = data.movies[0];
                            } else {
                                this.error = true;
                            }
                        });
                } else {
                    this.resetModel();
                }
            });
    }


    private resetModel() {
        this.model = new Movie("", 0, 0, "");
    }

    public onSubmit() {
        this.movieService.saveMovie(this.model);
        if(this.model.id) {
            this.router.navigateByUrl('/details/' + this.model.id);
        } else {
            this.router.navigateByUrl('');
        }
    }

}