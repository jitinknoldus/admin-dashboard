import { Component } from '@angular/core';


@Component({
  selector: 'app-image-ui-component',
  templateUrl: './image-ui-component.component.html',
  styleUrls: ['./image-ui-component.component.css']
})
export class ImageUiComponentComponent {

  imageUrl = '';
  imageId: number = 1001;


  // imageList: Array<{ imageId:number,imageUrl: string }> = [];
  imageList: { [id: number]: string } = {};

  insertImage(imageUrl: string) {
    this.imageUrl = imageUrl;
    if(imageUrl!=''){
      this.imageList[this.imageId] = this.imageUrl;
      this.imageId += 1;
    }
    console.log(this.imageList);
  }

  updateImage(updatedImageUrl:string, imageId:number){
   console.log(updatedImageUrl);
   console.log(imageId);
    for (const key in this.imageList) {
      if (this.imageList.hasOwnProperty(key)) {
        if (Number(key) === imageId) {
          this.imageList[key] = updatedImageUrl;
        }
      }
    }
    console.log(this.imageList);
  }

  deleteImage(imageId:number){
    if (this.imageList.hasOwnProperty(imageId)) {
      delete this.imageList[imageId];
      console.log(`Record with key ${imageId} has been deleted.`);
    } else {
      console.log(`Record with key ${imageId} not found.`);
    }
    console.log(this.imageList);
  }


  protected readonly Number = Number;
}
