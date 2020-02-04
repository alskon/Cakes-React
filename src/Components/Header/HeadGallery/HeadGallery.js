import React from 'react'
import './HeadGallery.css'
import Button from '../../Button/Button'

const images = [{index:1, img:'../../../img/head-img/banner1.jpg'}, {index:2, img:'../../../img/head-img/banner2.jpg'}]

class HeadGallery extends React.Component {
    constructor() {
        super();
        this.state = {currIndex:images[0].index, firstIndex:images[0].index, lastIndex:images.length}
    }
    clickLeft = ()=> {
        let stateInd = this.state.currIndex
        stateInd > this.state.firstIndex ? stateInd-- : stateInd = this.state.lastIndex
        this.setState({currIndex:stateInd})
    }
    clickRight = ()=> {
        let stateInd = this.state.currIndex
        stateInd < this.state.lastIndex ? stateInd++ : stateInd = this.state.firstIndex
        this.setState({currIndex:stateInd})
    }
    componentDidMount() {
        setInterval(this.clickRight, 5000)
    }
    render() {
        const currImage = images.map((image)=> (image.index === this.state.currIndex ? <img key={image.index} src={image.img} alt='img'></img> :''))
        return (
            <div className='headGallery'>
                {currImage}
                <div className='headerBtn'>
                    <Button onClick={this.clickLeft}>&lt;</Button>
                    <Button onClick={this.clickRight}>&gt;</Button>
                </div>

            </div>
            
        )
    }
}


export default HeadGallery