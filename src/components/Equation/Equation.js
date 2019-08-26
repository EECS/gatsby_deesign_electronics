import React from 'react'
import { Expression, toTex } from 'algebra.js'
import MathJax from "react-mathjax"
import "./Equation.css"

function Equation (props){
  const eq = new Expression(props.expression);
  const express = toTex(eq);

  return (
    <MathJax.Provider input="tex">
      <div className="MathJax">
        <MathJax.Node formula={express}/>
      </div>
    </MathJax.Provider>
  );
}

export default Equation