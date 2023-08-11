import {Component} from '@angular/core';
import {ImageData} from "../../../Model/ImageData";


@Component({
  selector: 'app-image-ui-component',
  templateUrl: './image-ui-component.component.html',
  styleUrls: ['./image-ui-component.component.css']
})
export class ImageUiComponentComponent {


  imageId: number = 1001;


  imageList: { [id: number]: ImageData } = {};

  /*
  * function to insert image link in the database.
  * */
  insertImage(model:string,imageUrl: string) {
    if(imageUrl!='' && model!='' ){
      this.imageList[this.imageId] = {model, imageUrl};
      this.imageId += 1;
    }
    console.log(this.imageList);
  }


  /*
* function to update image link of the existing image in the database.
* */
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

  /*
* function to delete image from the database.
* */
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
