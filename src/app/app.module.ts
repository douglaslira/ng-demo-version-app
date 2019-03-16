import { ErrorHandler, Injectable, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import * as Sentry from "@sentry/browser";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";

Sentry.init({
    dsn: "https://e051b2c8604c498b98049edcc7c15d02@sentry.io/1416952",
    environment: environment.production
        ? "production"
        : "development",
    release: environment.version
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    constructor() {}
    handleError(error) {
        Sentry.captureException(error.originalError || error);
        throw error;
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [
        {
            provide: ErrorHandler,
            useClass: SentryErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
