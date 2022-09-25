import styled from 'styled-components'

export const EditorPic = styled.div`


position: relative;

`
export const EditorPicTitle = styled.h3`
background-position: 0 -225px;
height: 13px;
margin: 150px auto 0;
width: 380px;
font-family: "Perpetua Titling MT", serif;
font-size:30px;
`
export const EditorPicWrapSlide = styled.div`
width:1000px;
height: 700px;
overflow: visible;
position: relative;
margin: 0 auto;
`

export const EditorPicListSlide = styled.ul`

display:block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
position: absolute;
top: 0;
list-style:none;


`
export const EditorPicListSlideLi = styled.li`

float: left;
`

export const EditorPicItemType1 = styled.div`
height: 300px;
width: 400px;
float:left;
position:relative;
`

export const EditorPicItemType2 = styled.div`
height: 300px;
width: 400px;
float: left;
position: relative;

`
export const EditorPicLinkItem = styled.a`
display: block;
height: 100%;
overflow: hidden;
width: 100%;
`

export const EditorPicItemAppendInfo = styled.div`

color: #fff;
left: 50%;
margin-left: -50%;
position: absolute;
text-align: center;
top: 0;
width: 100%;
z-index: 2;
`

export const EditorPicItemInfo_g = styled.div`
display: inline-block;
    vertical-align: middle;
`

export const EditorPicItemTitle = styled.strong`

display: block;
font-family:"Nanum Myeongjo", serif;
font-size: 26px;
font-weight: normal;
letter-spacing: -.025em;
line-height: 36px;
padding-top: 12px;
`

export const EditorPicLinkItemImg = styled.img`
height: 100%;
-webkit-transition: -webkit-transform .3s ease-in-out;
transition: transform .3s ease-in-out;
width: 100%;
&:hover {
    filter: brightness(70%);
  }


`


export const RecommendArticle = styled.div`

position: relative;

`
export const RecommendDesc = styled.p`
margin: 0 auto;
width: 960px;
`

export const RecommendTitle = styled.h3`
background-position: 0 -225px;
height: 13px;
margin: 150px auto 0;
width: 380px;
font-family: "Perpetua Titling MT", serif;
font-size:30px;
${RecommendDesc} {
    color:'silver';
   
    padding:5px;
    margin:auto 0;
    font-size:18px;
}

`

export const RecommendWrapSlide = styled.div`

    overflow: visible;
    width: 960px;

`


export const ListSlide = styled.ul`

overflow: hidden;
width: 7800px;
    padding-bottom: 180px;
    position: relative;

`
export const RecommendListSlideLi = styled.li`

display: inline-block;

overflow: hidden;
padding: 0 10px;
vertical-align: top;
width: 240px;

`

export const RecommendArticleSubject = styled.strong`

word-wrap: break-word;
    display: inline;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -.025em;
    word-break: break-all;
    font-family:"Noto Sans Light",sans-serif;
`

export const RecommendArticleDesc = styled.p`

color: #959595;
    display: block;
    font-family: "Noto Sans Light",sans-serif;
    font-size: 12px;
    letter-spacing: -.025em;
    line-height: 20px;
    padding-top: 10px;
    text-align: justify;
    word-break: break-all;
`