import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, of } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class CommService
{
    private data:Subject<string> = new BehaviorSubject("");

    public set Data(value:string)
    {
        this.data.next(value);
    }
    public get Data$()
    {
        return this.data;
    }
}