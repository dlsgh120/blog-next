import React from 'react';
import styled from 'styled-components';
import AboutExperience from './aboutExperience';
import AboutSkill from './aboutSkill';

const AboutComponent: React.FC = () =>{ 
    
    return(
        <AboutWrap>
            <Background style={{backgroundImage:`url(${"./images/about_background.jpg"})`}}>
                <div>
                    <h1>About Me</h1>
                    <p>최인호, Inho Choi</p>
                    <p>Front-End Developer</p>
                </div>
            </Background>
            <AboutContainer>
                <AboutTitle>
                    <h1>introduce</h1>
                    <p>배운것들을 꾸준히 기록하고자 노력하며, 실행하는 프론트엔드 주니어 개발자 입니다.</p>
                    <p>주로 React를 다루고 있으며, Node.js(express) 및, PHP(Laravel)를 사용한 경험이 있습니다.</p>
                    <p>다양한 기술을 적극 수용하며 효과적으로 활용하고자 하며, 사용자에게 양질의 서비스를 제공함으로써 보람을 느낍니다.</p>
                </AboutTitle>
                <AboutExperience />
                <AboutSkill />
            </AboutContainer>
        </AboutWrap>
    );
}

const AboutWrap = styled.div`
    
`;

const Background = styled.div`
    height:300px;
    background-size:100% 600px;
    background: no-repeat center;
    position: relative;
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center;
        padding-top:100px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
            font-weight:bold;
        }
    }

    @media screen and (max-width: 690px){
        &>div{
            &>h1{
                font-size:24px;
            }
            &>p{
                font-size:16px;
            }
        }
    }
`;
const AboutContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:0px auto 100px auto;

    @media screen and (max-width:1010px){
        width:calc(100% - 30px);
    }
`;

const AboutTitle = styled.div`
    padding-bottom:20px;
    border-bottom:1px solid #b4b2b2;
    &>h1{
        font-size:26px;
        margin:30px 0px 20px 0px;
        color:rgb(18, 184, 134);
        font-weight:500;
    }
    &>p{
        margin:10px 0px;
    }

    @media screen and (max-width: 690px){
        &>h1{
            font-size:22px;
        }
        &>p{
            font-size:14px;
        }
    }
`;

export default AboutComponent;