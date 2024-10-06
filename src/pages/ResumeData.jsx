import React from 'react';
import data from '../data/resume.json'

export const resume = data
export default function ResumeData() {
  return (
      <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
  );
}