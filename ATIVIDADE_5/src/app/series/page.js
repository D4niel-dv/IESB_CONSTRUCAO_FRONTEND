'use client'

import { SERVER_DIRECTORY } from "next/dist/shared/lib/constants";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import apiSeries from "../apis/apiSeries";
import Pagina from "../components/Pagina";

export default function Serie() {

    // Armazenar um dado para que o react saiba que ele sofreu alguma mudança
    // e mude na tela
    const [filmes, setSeries] = useState([])

    // Efeito Colateral
    useEffect(() => {
        // A requisição pra buscar os filmes
        buscarFilmes()
    }, [])

    async function buscarSeries() {
        const resultado = await apiSeries.get("/movie/popular?language=pt-BR")
        console.log(resultado.data.results)
        // alterando o estado filmes para receber os filmes da requisição
        setFilmes(resultado.data.results)
    }


    return (
        <Pagina titulo="Series Populares">

            <Row md={4}>
                {
                    filmes.map(Serie => {
                        return (
                            <Col className="py-2">
                                <Card style={{ height: '100%' }}>
                                    <Card.Img src={'https://image.tmdb.org/t/p/w500/' + Serie.poster_path} />
                                    <Card.Body>
                                        <Card.Title>{Serie.original_title}</Card.Title>
                                        <p><b>Nota: {Serie.vote_average} ⭐</b></p>
                                    </Card.Body>
                                    <Card.Footer className="text-end">
                                        <Button href={"/filmes/" + Serie.id}>Detalhes</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

        </Pagina>
    )
}