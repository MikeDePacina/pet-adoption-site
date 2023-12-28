import { Component } from 'react';

class Carousel extends Component{
    state = {
        active: 0
    }

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }

    handleClick = (e) =>{
        this.setState({
            // + turns string to int
            active: +e.target.dataset.index
        })
    }

    render(){
        const { active } = this.state
        const { images } = this.props

        return(
            <>
            <img src={images[active]} alt='animal hero'/>
            <div>
                {images.map((photo, index) =>(
                    <img
                    onClick={this.handleClick}
                    data-index={index}
                     key={index}
                     src={photo}
                     alt='animal thumbnail'
                     
                    />
                ))

                }
            </div>
            </>
        )
    }
}

export default Carousel