'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Mahdi',
        1000, 
        'a Web Developer',
        1000,
        'a React fan!',
        1000,
        'using NextJS',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', lineHeight: '3rem', margin:'10px 0 0 0'}}
      repeat={Infinity}
    />
  );
}
