import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent{
	@Input('group') public documentsForm: FormGroup;
	@Input('selected') public selected;
	loadAPI: Promise<any>;
	constructor() {
		// this.loadAPI = new Promise((resolve) => {
		//        this.loadScript();
		//        resolve(true);
		//    });
	    }
	public loadScript() {        
	    var isFound = false;
	    var scripts = document.getElementsByTagName("script")
	    for (var i = 0; i < scripts.length; ++i) {
	        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
	            isFound = true;
	        }
	    }

	    if (!isFound) {
	        var dynamicScripts = ["../../../assets/js/main.js"];
	        for (var i = 0; i < dynamicScripts .length; i++) {
	            let node = document.createElement('script');
	            node.src = dynamicScripts [i];
	            node.type = 'text/javascript';
	            node.async = false;
	            node.charset = 'utf-8';
	            document.getElementsByTagName('head')[0].appendChild(node);
	        }

	    }
	}
}
