import React from 'react';
import { addSub } from './util/algorithm';

const AlgorithmDisplayer = () => {
  return (
    <form>
      <label htmlFor="input1">Input 1</label>
      <input id="input1" type="text" />
      <label htmlFor="input2">Input 2</label>
      <input id="input2" type="text" />
      <button
        type="submit"
        onClick={() => {
          addSub(1, 2);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AlgorithmDisplayer;
