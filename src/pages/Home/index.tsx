import { useLocation, useNavigate } from "react-router";
import { useCallback, useEffect, useState } from 'react'
import fetcher from '@utils/fetcher';
import { useQuery } from 'react-query';
import {
    EditorPic, RecommendArticle, RecommendTitle, RecommendDesc, RecommendWrapSlide
    , ListSlide, RecommendListSlideLi, RecommendArticleSubject, RecommendArticleDesc, EditorPicWrapSlide, EditorPicTitle
    , EditorPicListSlide, EditorPicListSlideLi, EditorPicItemType1, EditorPicItemType2, EditorPicItemAppendInfo, EditorPicItemInfo_g, EditorPicItemTitle,
    EditorPicLinkItemImg, EditorPicLinkItem
} from "@Home/style";
import logo1 from "@img/logo1.png"
import { getCookie } from '@/utils/cookie';
import axios from 'axios';

const Home = () => {

    const { isLoading, error, data } = useQuery("getUsers", () => {
        return axios
            .get("http://localhost:8080/user", {
                withCredentials: true,
                headers: {
                    "X-ACCESS-TOKEN": getCookie("loginCookie")

                }
            })
            .then((response) => {
                return response.data;

            })
    });

    console.log(data);







    return (

        <div id='HomeContainer' style={{ overflowX: 'hidden' }}>

            <img src={logo1} />

            <EditorPic>
                <EditorPicTitle>Now update</EditorPicTitle>
                <br />
                <br />

                <EditorPicWrapSlide>

                    <EditorPicListSlide>

                        <EditorPicListSlideLi>
                            <EditorPicItemType2>

                                <EditorPicLinkItem>
                                    <EditorPicLinkItemImg src='https://images.pexels.com/photos/3301326/pexels-photo-3301326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    />
                                    <EditorPicItemAppendInfo>
                                        <EditorPicItemInfo_g>
                                            <EditorPicItemTitle>인생은 <br />파도와 <br /> 같아서</EditorPicItemTitle>
                                        </EditorPicItemInfo_g>

                                    </EditorPicItemAppendInfo>

                                </EditorPicLinkItem>


                            </EditorPicItemType2>


                        </EditorPicListSlideLi>
                        <EditorPicListSlideLi>
                            <EditorPicItemType1>
                                <EditorPicLinkItem>
                                    <EditorPicLinkItemImg src='https://pbs.twimg.com/media/EJNVWEoUUAAdIuP?format=jpg&name=4096x4096' />
                                    <EditorPicItemAppendInfo>
                                        <EditorPicItemInfo_g>
                                            <EditorPicItemTitle>오늘 <br /> 하루가 <br /> unlucky <br /> 할지라도</EditorPicItemTitle>
                                        </EditorPicItemInfo_g>
                                    </EditorPicItemAppendInfo>

                                </EditorPicLinkItem>
                            </EditorPicItemType1>
                        </EditorPicListSlideLi>


                        <EditorPicListSlideLi>
                            <EditorPicItemType2>

                                <EditorPicLinkItem>
                                    <EditorPicLinkItemImg src='https://godaye.files.wordpress.com/2015/03/her-joaquin-phoenix-141.jpg'
                                    />
                                    <EditorPicItemAppendInfo>
                                        <EditorPicItemInfo_g>
                                            <EditorPicItemTitle>인간은 <br />인공지능과 <br /> 사랑에 빠질 수 있을까?</EditorPicItemTitle>
                                        </EditorPicItemInfo_g>

                                    </EditorPicItemAppendInfo>

                                </EditorPicLinkItem>


                            </EditorPicItemType2>


                        </EditorPicListSlideLi>

                        <EditorPicListSlideLi>
                            <EditorPicItemType1>
                                <EditorPicLinkItem>
                                    <EditorPicLinkItemImg src='https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/Kwrk5rrX-e3llXZKRRq3gMUszBs.JPG' />
                                    <EditorPicItemAppendInfo>
                                        <EditorPicItemInfo_g>
                                            <EditorPicItemTitle> 조커의 <br /> 잘못일까 <br /> 사회의 <br /> 잘못일까<br /></EditorPicItemTitle>
                                        </EditorPicItemInfo_g>
                                    </EditorPicItemAppendInfo>

                                </EditorPicLinkItem>
                            </EditorPicItemType1>
                        </EditorPicListSlideLi>


                    </EditorPicListSlide>
                </EditorPicWrapSlide>

            </EditorPic>

            <RecommendArticle>
                <RecommendTitle>Recommend Articles
                    <RecommendDesc>추천글을 만나보세요</RecommendDesc>
                </RecommendTitle>
                <br />
                <br />
                <RecommendWrapSlide>
                    <ListSlide>
                        <RecommendListSlideLi>
                            <RecommendArticleSubject>공상과학이 주는 낭만</RecommendArticleSubject>
                            <img src='https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6MBC/image/2telH0kHEVmpvtjsUY6XskSo72Q.png'
                                width='240' alt="공상과학도 낭만적일 수 있다." />
                            <RecommendArticleDesc>엄마는 가끔 내가 기억하지 못하는 일들을 기억하냐고 물어본다. 예를 들면 1살때 제주도에 가서 엄청 울었는데 기억나니? 그땐 왜 그렇게 울었니? 등등 정말 기억속에서 사라진듯한 어렸을적 이야기들을 여쭤보시는데 난 정말 모른다. 정확히 3살이전 기억은 머릿속에서 사라진듯이 없다. 한 4살때 부터는 간간이 기억나기도 하지만... 이것을 '유아기 기억상실증'이라고 부른다. 아직까지 과학적으로 확실히 증명된 것은 없지만 유아들의 신경이 새롭게 형성되는 과정에서 두돌이전의 과거 기억들을 잊어버리는 것으로 보면된다. </RecommendArticleDesc>
                        </RecommendListSlideLi>
                        <RecommendListSlideLi>

                            <RecommendArticleSubject>나의 가장 나종 지니인것</RecommendArticleSubject>
                            <img src="http://image.kyobobook.co.kr/images/book/large/979/l9788954601979.jpg" width="240" />
                            <RecommendArticleDesc>이야기는 화자와 화자의 형님과의 전화통화를 담고있다. 화자의 아들인 '창환'은 민주화운동을 하다 쇠파이프에 맞아 세상을 떠났다. 화자에게 창환은 속도 안썩이고 명문대학교도 한방에 들어가는, 남과 비교해서 무엇이든 뛰어난 자랑할 맛나는 아들이였다. 그렇기에 형님과 전화통화를 하면서도 형님의 아들인 창석이, 자신의 친구인 명애 아들의 결혼을 보면서도 하나도 부럽지 않다고 생각한다. 화자에게 창환은 다른 사람들의 아들이 부럽다고 생각이 들지 않을 만큼  그들과 비교할 수 없는 그릇을 가진 아들이였으니까. </RecommendArticleDesc>
                        </RecommendListSlideLi>
                        <RecommendListSlideLi>
                            <RecommendArticleSubject>야만은 문명 앞에서 좌절할 수 밖에 없다</RecommendArticleSubject>
                            <img src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/5hd0/image/6859POdwE6TkTEXFFQmbUtbKN_c.jpg"
                                width='240' alt='야만은 문명 앞에서 좌절할 수 밖에 없다' />
                            <RecommendArticleDesc>아이들이 점점 야만에 동화되어 가며 사냥을 하고 춤놀이를 한다. 그리고 야만이 아직 사회화가 덜 된 아이들에게 강력했다는 것은  '퍼시벌'이라는 어린 아이한테서도 볼 수 있다. 이 아이는 처음 무인도에 왔을 때는 자기 이름과 주소를 줄줄 나열했지만 나중에 해군장교가 자기 이름을 물어볼 때는 한마디도 하지 못했다. 이처럼 야만은 문명에서의 기억을 잊게 한다. 그러나 나는 결론적으로 야만과 문명 중 어떤 것이 '선'이다 '악'이다를 나누기 보단 어떤 것이 더 강력한지 생각해봤는데 결국 문명이 더 강한 것 같다. 마지막에 아이들을 구하러 온 해군 장교는 문명으로 상징되는데 이 해군 장교가 오자 아이들이 모두 눈물을 흘린다. 이 눈물에는 안도감이 대표적일 것 같다. 하지만 정말 의외였던게 누구보다 멘탈이 강하고 센 잭도 눈물을 흘린다. 사냥도 한 애가 운다고..? 물론 아이니까 울수도 있지만 이 장면을 보며 결국 야만은 문명 앞에서 무너질 수 밖에 없구나를 느꼈다. </RecommendArticleDesc>

                        </RecommendListSlideLi>
                        <RecommendListSlideLi>
                            <RecommendArticleSubject>우리는 진정한 여행을 하고 있을까?</RecommendArticleSubject>
                            <img src="https://blog.kakaocdn.net/dn/bQxlDk/btqDwDNAgkG/8ONI9YaU8CjEEWYespkd6k/img.jpg"
                                width="240" alt="우리는 진정해나 여행을 하고 있을까?" />
                            <RecommendArticleDesc>진정한 여행의 의미가 무엇일까? 여행을 하는 이유는 무엇일까에 대해 어쩌면 명료할 수도 있고, 생각해 볼만한 질문들로 책은 가득했다. '우리가 하는 여행이 진정한 여행일까?'라는 질문이 가장 인상적이였는데 우리는 보통 한 지역에 여행을 다녀오면 다 아는듯이 말하지만 사실은 수박 겉핥기를 하는 것이다. 작가는 '알쓸신잡'이라는 프로그램에 출연했을 때</RecommendArticleDesc>
                        </RecommendListSlideLi>
                        <RecommendListSlideLi>
                            <RecommendArticleSubject>결국, 공간은 기억이다.</RecommendArticleSubject>
                            <img src="http://image.kyobobook.co.kr/images/book/xlarge/959/x9788932472959.jpg" width="240"
                                alt="도시는 무엇으로 사는가" />
                        </RecommendListSlideLi>
                    </ListSlide>
                </RecommendWrapSlide>

            </RecommendArticle>
        </div >
    );
}

export default Home;