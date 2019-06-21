import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {



  // transform(text: string, search): string {
  //   if (search && text) {
  //     console.log(search, text)
  //     let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  //     pattern = pattern.split(' ').filter((t) => {
  //       return t.length > 0;
  //     }).join('|');
  //     const regex = new RegExp(pattern, 'gi');
  //     return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  //   } else {
  //     return text;
  //   }
  // }


  // transform(value: string, args: string): any {
  //   if (args && value) {
  //     let startIndex = value.toLowerCase().indexOf(args.toLowerCase());
  //     if (startIndex != -1) {
  //       let endLength = args.length;
  //       let matchingString = value.substr(startIndex, endLength);
  //       return value.replace(matchingString, "<mark>" + matchingString + "</mark>");
  //     }

  //   }
  //   return value;
  // }

  transform(value: string, args: string): any {
    if (args && value) {
      console.log(args, value);
      let startIndex = value.toLowerCase().indexOf(args.toLowerCase());
      console.log(startIndex)
      if (startIndex != -1 && startIndex === 0) {
        let endLength = args.length;
        let matchingString = value.substr(startIndex, endLength);
        return value.replace(matchingString, "<mark>" + matchingString + "</mark>");
      }

    }
    return value;
  }
}



