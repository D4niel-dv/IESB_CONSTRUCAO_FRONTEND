"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function UserDetail() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      async function fetchUser() {
        try {
          const response = await axios.get(`https://dummyjson.com/users/${id}`);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user details', error);
        }
      }

      fetchUser();
    }
  }, [id]);

  if (!user) return <Container>Loading...</Container>;

  return (
    <Container>
      <h1 className="my-4">Detalhes do Usuário</h1>
      <Card>
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Telefone: {user.phone}</ListGroup.Item>
            <ListGroup.Item>Gênero: {user.gender}</ListGroup.Item>
            <ListGroup.Item>Idade: {user.age}</ListGroup.Item>
            <ListGroup.Item>Data de Nascimento: {user.birthDate}</ListGroup.Item>
            <ListGroup.Item>Universidade: {user.university}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
