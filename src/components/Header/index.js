import React, {useState} from 'react';
import { Container, Logo, SearchInput } from './styled';
 
export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search === '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(search === '') {
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch( e.target.value );
    }

    return(
        <Container>
            <Logo src="/assets/images/logo-white.png" />
            <SearchInput 
                type="text" 
                placeholder="Digite sua cidade..." 
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                title="Pesquisar previsão do tempo por cidade"
                />
        </Container>
    );
}   