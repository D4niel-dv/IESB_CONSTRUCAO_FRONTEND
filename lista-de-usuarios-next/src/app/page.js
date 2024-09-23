"use client";

import { useEffect,useState } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';



export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Listagem de Usuários</h1>
      <Row>
        {users.map((user) => (
          <Col md={4} key={user.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={user.image} />
              <Card.Body>
                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                <Card.Text>
                  Idade: {user.age}
                </Card.Text>
                <Link href={`/user/${user.id}`} passHref>
                  <Button variant="primary">Ver Detalhes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
