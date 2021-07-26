import React from 'react';
import styled from 'styled-components';
import { Particle } from '../components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I am
                    <span>
                        Test person
                    </span>
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit animi libero perferendis aperiam vero adipisci ea aut placeat atque eius nam, perspiciatis dolore fugiat voluptas commodi magni autem, repellat non!</p>
                <div className="icons">
                    <a href="https://codepen.io/pen/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
};


const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;


    h1 {
        font-size: 3em;
        color: var(--white-color);

        span {
            color: var(--primary-color);
        }
    }

    .typography {
        width: 100%;
        position: absolute;
        top: 50%;
        left : 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        line-height: 1;

            .icon {
                padding: 2em 1em;
                position: relative;
                top: 2em;


                svg {
                    transition : .4s;
                    &:hover {
                    color: var(--primary-color);
                }
                }
            }
    }


`;

export default HomePage;
