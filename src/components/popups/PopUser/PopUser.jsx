import { SPopExit,
         SPopExitContainer,
         SPopExitBlock,
         SPopExitTtl,
         SPopExitForm,
         SPopExitFormGroup,
         SPopExitBtnYes,
         SPopExitBtnNo
 } from "./PopUser.styled";
 import { SLinkNo,SLinkYes} from './PopUser.styled';

const PopUser = () =>{

    return(
        <SPopExit id="popExit">
          <SPopExitContainer>
            <SPopExitBlock>
              <SPopExitTtl>
                <h2>Выйти из аккаунта?</h2>
              </SPopExitTtl>
              <SPopExitForm>
                <SPopExitFormGroup>
                  <SPopExitBtnYes>
                    {/* <a href="modal/signin.html">Да, выйти</a>{" "} */}
                    <SLinkYes to="/login">Да, выйти</SLinkYes>{" "}
                  </SPopExitBtnYes>
                  <SPopExitBtnNo>
                    {/* <a href="main.html">Нет, остаться</a>{" "} */}
                     <SLinkNo to="/">Нет, остаться</SLinkNo>{" "}
                  </SPopExitBtnNo>
                </SPopExitFormGroup>
              </SPopExitForm>
            </SPopExitBlock>
          </SPopExitContainer>
        </SPopExit>
    );
}
export default PopUser;

/*
<div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a href="main.html">Нет, остаться</a>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
*/

/*

*/
