
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'highlight'
})
export class HighlightSearch implements PipeTransform {
    transform(text: string, search): string {
        if (search && text) {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            const regex = new RegExp(pattern, 'gi');
            return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
        } else {
            return text;
        }
    }
}

// @Pipe({ name: 'highlight' })
// export class HighlightSearch implements PipeTransform {
//   transform(text: string, [search]): string {
//     return search ? text.replace(new RegExp(search, 'i'), `<span class="highlight">${search}</span>`) : text;
//   }
// }

// @Pipe({ name: 'highlight' })
// export class HighlightSearch implements PipeTransform {
//   transform(text: string, search): string {
//     var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
//     pattern = pattern.split(' ').filter((t) => {
//       return t.length > 0;
//     }).join('|');
//     var regex = new RegExp(pattern, 'gi');

//     return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
//   }
// }

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'highlight'
// })

// export class HighlightSearch implements PipeTransform {

//     transform(value: any, args: any): any {
//         if (!args) {return value;}
//         var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
//         return value.replace(re, "<mark>" + args + "</mark>");
//     }
// }


// import {Component, NgModule, VERSION, Pipe, PipeTransform} from '@angular/core'
// import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

// @Pipe({
//     name: 'highlight'
// })
// export class HighlightSearch implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer){}

//   transform(value: any, args: any): any {
//     if (!args) {
//       return value;
//     }
//     // Match in a case insensitive maneer
//     const re = new RegExp(args, 'gi');
//     const match = value.match(re);

//     // If there's no match, just return the original value.
//     if (!match) {
//       return value;
//     }

//     const result = value.replace(re, "<mark>" + match[0] + "</mark>");
//     return this.sanitizer.bypassSecurityTrustHtml(result);
//   }
// }