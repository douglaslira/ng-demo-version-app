import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { environment } from "src/environments/environment";

@Component({selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.css"]})
export class AppComponent implements OnInit {
    public version: string;

    constructor(private title: Title) {}

    ngOnInit(): void {
        this.version = environment.version;
        this.title.setTitle(`NgDemoVersionApp v${this.version}`);
    }
}
