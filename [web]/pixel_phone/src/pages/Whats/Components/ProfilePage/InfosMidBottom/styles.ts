import styled from "styled-components";

export const Container = styled.div`
.infosMidBottom {


    .userInfos {
        margin-top: 25px;
        padding-left: 15px;

        .nameInfo {
            display: flex;
            flex-direction: row;
    
            .userIcon {
                color: #8F9090;
                font-size: 35px;
                height: 18px;
            }

            .userInfoName {
                margin-left: 7px;
                display: flex;
                flex-direction: column;
        
                .infoTag {
                    font-weight: 400;
                    font-size: 11px;
                    color: #93979A;
                }
        
                .secondText {
                    font-weight: 400;
                    font-size: 11px;
                    color: #E3E4E4;
                }
                
                .secondText::placeholder {
                    color: #E3E4E4;
                }
        
                .tagDesc {
                    margin-top: 3px;
                    font-weight: 400;
                    font-size: 9px;
                    color: #8A8D8E;
                }
            }
        }
    
        .aboutInfo {
            margin-top: 10px;

            display: flex;
            flex-direction: row;

            .infoIcon {
                color: #8F9090;
                font-size: 19px;
                height: 18px;
            }

            .userInfoAbout {
                margin-left: 7px;
                display: flex;
                flex-direction: column;
        
                .infoTag {
                    font-weight: 400;
                    font-size: 11px;
                    color: #93979A;
                }
        
                .secondText {
                    font-weight: 400;
                    font-size: 11px;
                    color: #E3E4E4;
                }

                .secondText::placeholder {
                    color: #E3E4E4;
                }
            }
        }

        .phoneInfo {
            margin-top: 10px;
            margin-left: 4px;

            display: flex;
            flex-direction: row;

            .phoneIcon {
                color: #8F9090;
                font-size: 13.5px;
                height: 18px;

                transform: rotate(88deg);
            }

            .userInfoPhone {
                margin-left: 7px;
                display: flex;
                flex-direction: column;
        
                .infoTag {
                    font-weight: 400;
                    font-size: 11px;
                    color: #93979A;
                }

                .secondText {
                    font-weight: 400;
                    font-size: 11px;
                    color: #E3E4E4;
                }
            }
        }
    }

  }
`;