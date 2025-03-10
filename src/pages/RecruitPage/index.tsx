import * as S from "./styled";
import { googleForm } from "../../constants/googleForm";

export const RecruitPage = () => {
    return (
        <S.MainCont>
            <S.SubCont>
                <S.Title>디지털 포렌식</S.Title>
                <S.Title>121기 함께하려면</S.Title>
                <S.Title>
                    <S.Highlight href={googleForm} target='_blank'>
                        여기
                    </S.Highlight>
                    를 눌러 신청하기
                </S.Title>
            </S.SubCont>
        </S.MainCont>
    );
};
