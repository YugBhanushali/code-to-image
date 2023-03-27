import styled from 'styled-components'

const FeatureOuterBox = styled.div`
    ${'' /* position: fixed; */}
    position: ${(props)=>props.position};
    margin:20px;
    display:flex-col;
    ${'' /* z-index:5; */}
    ${'' /* margin:auto; */}
    width:800px;
    bottom: 20px;
    ${'' /* align-items: center; */}
    background: rgba(159, 159, 159, 0.24);
    border: 1px solid rgba(178, 168, 168, 0.52);
    border-radius: 12px;
    padding:3px;
    text-align:center
`

const FeatureInnerBox = styled.div`
    display:flex;
    width: ${(props)=>props.withOfBox};
    ${'' /* min-height: 52px; */}
    height:${(props)=>props.heightOfBox};
    background: rgba(17, 17, 17, 0.42);
    border: 1px solid rgba(175, 159, 159, 0.62);
    border-radius: 7px;
    margin:4px;
    text-align:center;
    justify-content:start;
    font-family:'JetBrains Mono';
    font-size:13px;
    color:#BBADAD;
    padding:13px;
    align-items:center;
`

const FeatureMediumBox =styled.div`
    display:flex;
    width: ${(props)=>props.withOfBox};
    height: ${(props)=>props.heightOfBox};
    background: rgba(40, 37, 37, 0.42);
    border: 1px solid rgba(98, 83, 83, 0.82);
    border-radius: 7px;
    margin:8px;
    text-align:center;
    justify-content:center;
    font-family:'JetBrains Mono';
    font-size:13px;
    color:#BBADAD;
    padding:13px;
    align-items:center;
`

const FeatureGeneralBox =styled.div`
    display:flex;
    width: ${(props)=>props.withOfBox};
    height: ${(props)=>props.heightOfBox};
    background: rgba(17, 17, 17, 0.42);
    border: 1px solid rgba(175, 159, 159, 0.62);
    border-radius: 7px;
    margin:${(props)=>props.marginOfBox};
    text-align:center;
    justify-content:start;
    font-family:'JetBrains Mono';
    font-size:13px;
    color:#BBADAD;
    padding:${(props)=>props.paddingOfBox};
    align-items:center;
`

export {FeatureInnerBox,FeatureOuterBox,FeatureMediumBox,FeatureGeneralBox};