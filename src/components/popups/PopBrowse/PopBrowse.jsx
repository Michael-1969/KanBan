
import { Link, useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";

import Calendar from "./Calendar/Calendar";
import {SPopBrowse,
        SPopBrowseContainer,
        SPopBrowseContent,
        SPopBrowseBlock,
        SHiddenCategories} from '../PopBrowse/PopBrowse.styled';

import {SCardTheme,SCardThemeTopic,titleMap} from '../../Card/Card.styled';
import {cardList} from '../../../../data.js'

 

function PopBrowse() {

  const {id} = useParams();

  const navigate = useNavigate();

  const cardItem = useMemo(
     ()=> cardList.find((card)=>String(card.id)===String(id))||{topic:'', title:'', date:'', status:''},       
           [id] // Пересчитывается только при изменении id
  );

  const handleClose = () => { navigate('/'); }

    return (
        <SPopBrowse id="popBrowse">
          <SPopBrowseContainer>
            <SPopBrowseBlock>
              <SPopBrowseContent className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{cardItem.title}</h3>
                  
                    <SCardTheme topic={cardItem.topic}>
                      <SCardThemeTopic style={{margin: '0px 5px'}} topic={cardItem.topic}>{cardItem.topic}</SCardThemeTopic>
                    </SCardTheme>
                </div>

                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    <div className={`status__theme ${cardItem.status ? '_gray' : '_hide'}`}>
                      <p>{cardItem.status}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pop-browse__wrap">
                  <form
                    className="pop-browse__form form-browse"
                    id="formBrowseCard"
                    action="#"
                  >
                    <div className="form-browse__block">
                      <label htmlFor="textArea01" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
                  <Calendar/>
                </div>


                <SHiddenCategories className="theme-down__categories theme-down">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__theme _orange _active-category">
                     <p className="_orange">{cardItem.topic}</p>
                  </div>
                </SHiddenCategories>

                
                <div className="pop-browse__btn-browse ">
                  <div className="btn-group">
                     <Link to={`/card/${cardItem.id}/edit`} target="_self">
                        <button className="btn-browse__edit _btn-bor _hover03">
                          Редактировать задачу
                        </button>
                      </Link>

                    <button className="btn-browse__delete _btn-bor _hover03">
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button onClick={handleClose} className="btn-browse__close _btn-bg _hover01">
                    Закрыть
                  </button>
                </div>
                    {/* <div className="pop-browse__btn-edit _hide">
                      <div className="btn-group">
                        <button className="btn-edit__edit _btn-bg _hover01">
                          <a href="#">Сохранить</a>
                        </button>
                        <button className="btn-edit__edit _btn-bor _hover03">
                          <a href="#">Отменить</a>
                        </button>
                        <button
                          className="btn-edit__delete _btn-bor _hover03"
                          id="btnDelete"
                        >
                          <a href="#">Удалить задачу</a>
                        </button>
                      </div>
                      <button className="btn-edit__close _btn-bg _hover01">
                        <a href="#">Закрыть</a>
                      </button>
                    </div> */}
              </SPopBrowseContent>
            </SPopBrowseBlock>
          </SPopBrowseContainer>
        </SPopBrowse>
    )
  }
  
  export default PopBrowse