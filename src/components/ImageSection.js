
import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryBtn from './PrimaryBtn';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>John Deon</span></h4>
                </div>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti molestias commodi excepturi in odio perspiciatis blanditiis voluptatum provident, at, quam distinctio voluptas est illo nihil suscipit dicta! Veritatis, hic!
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name </p>
                        <p>AGE </p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location </p>
                        <p>Services </p>
                    </div>
                    <div className="info">
                        <p>: John Deo </p>
                        <p>: 33 </p>
                        <p>: Algerienne </p>
                        <p>: Anglish, French, Arabic </p>
                        <p>: London </p>
                        <p>: Freelancer </p>
                    </div>
                </div>
                <PrimaryBtn title={"Download Cv"} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection;
