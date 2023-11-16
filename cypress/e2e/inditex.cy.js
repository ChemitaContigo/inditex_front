import {declineConsents, findAndClick, searchAutomation, visitGoogle} from "../support/screen/googleScreen";
import {changeOrigin, computerControlReferenceClick, screenshot, searchText} from "../support/screen/wikipediaScreen";

describe('template spec', () => {
  it('passes', () => {


      visitGoogle();
      declineConsents();
      searchAutomation('automatización');
      findAndClick('Wikipedia');
      changeOrigin();
      computerControlReferenceClick();
      // El primer mecanismo de control retroalimentado fue el reloj de agua inventado por el ingeniero griego Ctesibius (285-222 a. C.).
      searchText('285-222');
      screenshot('Automation');


  })
})