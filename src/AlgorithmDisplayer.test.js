import React from 'react';
import AlgorithmDisplayer from './AlgorithmDisplayer';
import { render, fireEvent } from '@testing-library/react';
import * as algorithm from './util/algorithm';

describe('AlgorithmDisplayer', () => {
  it('renders without crashing', () => {
    render(<AlgorithmDisplayer />);
  });

  it('displays the two text inputs', () => {
    const { queryByLabelText, queryByText } = render(<AlgorithmDisplayer />);
    const input1 = queryByLabelText(/Input 1/i);
    const input2 = queryByLabelText(/Input 2/i);
    const submitButton = queryByText(/Submit/i);

    expect(input1).not.toBeNull();
    expect(input2).not.toBeNull();
    expect(submitButton).not.toBeNull();
  });

  it('Takes produces an output when the button is clicked', () => {
    spyOn(algorithm, 'addSub');

    const { getByText } = render(<AlgorithmDisplayer />);
    const submitButton = getByText(/Submit/i);
    fireEvent.click(submitButton);
    expect(algorithm.addSub).toHaveBeenCalled();
  });
});
