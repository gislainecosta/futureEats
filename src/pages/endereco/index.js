import React, {useState} from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import {Container, Input, Paragrafo, ContainerInput, Botao} from './styles';
import Header from '../../Components/Header/index';
import { useHistory } from "react-router";
import Loading from './../../Components/Loading/Loading';

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#b8b8b8",
            contrastText: "#b8b8b8",
        },
    },
});


const Endereco = () =>{
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [open, setOpen] = useState(false)
    
    const inputLogradouro = (event) => {
        setLogradouro(event.target.value)
    }

    const inputNumero = (event) => {
        setNumero(event.target.value)
    }

    const inputComplemento = (event) => {
        setComplemento(event.target.value)
    }

    const inputBairro = (event) => {
        setBairro(event.target.value)
    }

    const inputCidade = (event) => {
        setCidade(event.target.value)
    }

    const inputEstado = (event) => {
        setEstado(event.target.value)
    }
    
    const history = useHistory() 

    const goToHome = () =>{
        history.push('/home')
      }

    const enviarInput = () => {
        setOpen(true) 
        const token = localStorage.getItem("token")

        const body = {
                street: logradouro,
                number: numero,
                neighbourhood: bairro,
                city: cidade,
                state: estado ,
                complement: complemento
            }

        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/address', body, {
            headers: {
                Auth: token
        }}).then((response) => {
            console.log(response)
            localStorage.setItem("token", response.data.token)
            setOpen(false)
            goToHome()
        }).catch(error => {
            console.log(error.response)
            setOpen(false)
            alert('erro insira um endereço valido')
        })

    }

    return(
        <ThemeProvider theme={MyTheme}>
            <Container>
                <Header back/>
                <Paragrafo>Meu endereço</Paragrafo>
    
                <ContainerInput>
                <Input 
                onChange={inputLogradouro} 
                label="Logradouro" 
                placeholder="Rua / Av." 
                variant="outlined" 
                required
                />
                <Input 
                onChange={inputNumero} 
                label="Numero" 
                placeholder="Numero" 
                variant="outlined" 
                required 
                type="number"
                />
                <Input 
                onChange={inputComplemento} 
                label="Complemento" 
                placeholder="Apto. / Bloco" 
                variant="outlined" 
                required
                />
                <Input 
                onChange={inputBairro} 
                label="Bairro" 
                placeholder="Bairro" 
                variant="outlined" 
                required
                />
                <Input 
                onChange={inputCidade} 
                label="Cidade" 
                placeholder="Cidade" 
                variant="outlined" 
                required
                />
                <Input 
                onChange={inputEstado} 
                label="Estado" 
                placeholder="Estado" 
                variant="outlined" 
                required
                />
    
                <Botao onClick={enviarInput}>Salvar</Botao>
    
                </ContainerInput>
            
                <Loading openLoading={open} />
            </Container>

        </ThemeProvider>
    )
}

export default Endereco 
