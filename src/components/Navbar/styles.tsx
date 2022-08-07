import styled from "styled-components"
import{ PageText as NavText} from "../helpers/PageText"
import{ PageItemWrapper as NavItemWrapper} from "../helpers/ItemWrapper"


export const Logo = styled.img`
    width: 6em;
    border:1px solid #131A22;
    padding: .2em .1em;
    cursor:pointer;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`

export const Text = styled(NavText)`
    color:${(props)=>props.color ? props.color :"#ffffff" };
    font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"
};    
`