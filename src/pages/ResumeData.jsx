import React from 'react';

export default function ResumeData() {
  return (
    <Container className='container'>
      <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    </Container>
  );
}