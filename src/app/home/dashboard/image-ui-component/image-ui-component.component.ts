import { Component } from '@angular/core';
import {ImageData} from "../../../Model/ImageData";


@Component({
  selector: 'app-image-ui-component',
  templateUrl: './image-ui-component.component.html',
  styleUrls: ['./image-ui-component.component.css']
})
export class ImageUiComponentComponent {

  imageUrl = '';
  model = '';
  imageId: number = 1001;


  // imageList: Array<{ imageId:number,imageUrl: string }> = [];
  imageList: { [id: number]: ImageData } = {};

  images:{[id:number]:ImageData}={}



  // daloImage(model:string, imageUrl:string){
  //     console.log(model);
  //     console.log(imageUrl);
  //     let m =  model;
  //     let i = imageUrl;
  //     // this.images[this.imageId] = newImageData(model,imageUrl);
  //     const newImageData:ImageData = {model,imageUrl};
  //     this.images[this.imageId] = newImageData;
  //     this.imageId += 1;
  //     console.log(this.images);
  // }

  insertImage(model:string,imageUrl: string) {
    if(imageUrl!='' && model!='' ){
      const newImageData:ImageData = {model,imageUrl};
      this.imageList[this.imageId] = newImageData;
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
          this.imageList[key].imageUrl = updatedImageUrl;
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
  // protected readonly String = String;
  // protected readonly Number = Number;
}
