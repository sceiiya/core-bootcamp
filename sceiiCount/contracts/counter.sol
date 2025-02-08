// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0 < 0.9.0;

contract Counter {
  int256 private counter = 0;

  function getCount() public view returns(int256){
    return counter;
  }

  function gain() public {
    counter ++;
  }

  function loss() public {
    counter --;
  }

  

}