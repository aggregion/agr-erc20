pragma solidity ^0.5.0;

import './ERC20/ERC20.sol';
import './ERC20/ERC20Burnable.sol';
import './ERC20/ERC20Detailed.sol';

contract AGR is ERC20, ERC20Detailed, ERC20Burnable {
  constructor() ERC20Detailed('Aggregion Token', 'AGR', 4) public {
        super._mint(msg.sender, 30000000000000);
  }
}
