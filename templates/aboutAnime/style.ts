import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #d84444;
`
export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const AboutImageContainer = styled.div`
    width: 100%;
    text-align: center;
`
export const AboutImage = styled(Image)`
    width: 90%;
    height: 300px;
    object-fit: cover;
`
export const TextDiv = styled.div`
    color: white;
    width: 90%;
    text-align: justify;
`

