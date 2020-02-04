import React from 'react'
import './Main.css'
import Section from './Section/Section'
import Button from '../Button/Button'

const content = {
    mainArticle: {index:1, header:'ДОРОГОЙ ГОСТЬ!', text:`РАДЫ ВИДЕТЬ ВАС НА НАШЕМ САЙТЕ!. 
                        НАША КОНДИТЕРСКАЯ ПРЕДЛАГАЕТ ВАМ ИЗЫСКАННЫЕ И ВКУСНЫЕ ТОРТЫ НА ЗАКАЗ ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ, ДЕСЕРТЫ, КОНФЕТЫ И ПИРОЖНЫЕ.
                        ПРИОБРЕТАЯ НАШУ ПРОДУКЦИЮ, ВЫ МОЖЕТЕ БЫТЬ УВЕРЕНЫ, ЧТО ПОЛУЧИТЕ НАСТОЯЩИЙ СЛАДКИЙ ШЕДЕВР, 
                        НАШИ ТОРТЫ ИЗГОТОВЛЕНЫ ТОЛЬКО ИЗ НАТУРАЛЬНЫХ ПРОДУКТОВ!
                        ВЫ ВСЕГДА НАЙДЕТЕ У НАС ВКУСНЕЙШИЕ ДЕСЕРТЫ И ТОРТЫ С ДОСТАВКОЙ ИЛИ 
                        СМОЖЕТЕ ЗАКАЗАТЬ УНИКАЛЬНЫЙ ВАРИАНТ НА ЛЮБОЙ ПРАЗДНИК.`},
    galleryWork: {index:2, header:'Наши работы', images: [
                                                        {index:1, img:'../../img/works/med1.jpg'},
                                                        {index:2, img:'../../img/works/med2.jpg'},
                                                        {index:3, img:'../../img/works/nap1.jpg'},
                                                        {index:4, img:'../../img/works/nap2.jpg'},]},
    contacts: {index:3, header:'Контакты', text: `г. Волгоград, ул. им.И.В.Морозова, 3
                                                +7 (988) 0100532`,
                map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.800866485713!2d44.50885831605568!3d48.74750057927688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acaf657d8072d%3A0xf88fe79f49a5834a!2z0YPQuy4g0LjQvNC10L3QuCDQmNCy0LDQvdCwINCc0L7RgNC-0LfQvtCy0LAsIDMsINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0MDAxMzc!5e0!3m2!1sru!2sua!4v1580566259367!5m2!1sru!2sua" width="400" height="280" frameborder="0" style="border:0;" allowfullscreen="">'
            },
    reviews: {index:4, header:'Отзывы о нас', text:[
                                                    {index:1, text:`Заказала торт в рекомендованной друзьями кондитерской, а в день, 
                                                    когда его должны были доставить, получила от них сообщение, что у них накладка из-за 
                                                    большого заказа и они успеют только к следующему вечеру. В расстроенных чувствах стала 
                                                    искать альтернативные варианты, наткнулась на этот сайт. Позвонила, особо даже не надеясь 
                                                    на успех. Как результат: через три часа у меня уже был нужный торт. Очень вкусный, красивый. 
                                                    Огромное спасибо кондитерам и менеджерам что спасли праздник.`},
                                                    {index:2, text:`Огромное спасибо за куличи! Куличи оказались очень вкусными и красивыми. 
                                                    Коллектив остался сыт и доволен Доставку выполнили в срок (за это всегда больше всего переживаешь). 
                                                    Очень рада, что нашла ваш сайт. При случае обязательно обращусь к вам еще раз.`}]}
}
class Main extends React.Component {

    constructor() {
        super()
        this.state = {firstReview:content.reviews.text[0].index, currReview:content.reviews.text[0].index, lastReview:content.reviews.text.length}
    }
    showGalleryWorkImg = ()=> content.galleryWork.images.map((image)=><img key={image.index} src={image.img} alt='img'></img>)
    onClickLeft = ()=>{
        let stateInd = this.state.currReview
        stateInd > this.state.firstReview ? stateInd-- : stateInd = this.state.lastReview
        this.setState({currReview:stateInd})
    }
    onClickRight = ()=>{
        let stateInd = this.state.currReview
        stateInd < this.state.lastReview ? stateInd++ : stateInd = this.state.firstReview
        this.setState({currReview:stateInd})
    }
    render(){
        const rendReview = content.reviews.text.map((review)=> review.index === this.state.currReview ? 
                                                                <Section key={review.index} header={content.reviews.header} 
                                                                contentArea={review.text}></Section> : '')
    return (
        <main>
            <div className='mainArticle'>
                <Section key={content.mainArticle.index} header={content.mainArticle.header} contentArea={content.mainArticle.text}/>
            </div>        
            <div className='divGalleryContact'>
                <div className='galleryWork'>
                    <Section key={content.galleryWork.index} header={content.galleryWork.header} contentArea={this.showGalleryWorkImg()}/>
                </div>                
                <div className='contacts'>
                    <Section key={content.contacts.index} header={content.contacts.header} contentArea={content.contacts.text}/>
                    <iframe title='gMap' src={content.contacts.map} width="400" height="280" frameBorder="0" allowFullScreen=""></iframe>
                </div>                
            </div>
            <div className='reviews'>
                <div className='reviewDecor'>{rendReview}</div>               
                <Button onClick={this.onClickLeft}>&lt;</Button>
                <Button onClick={this.onClickRight}>&gt;</Button>
            </div>
            
        </main>
    )
    }
}

export default Main