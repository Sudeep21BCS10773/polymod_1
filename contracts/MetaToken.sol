// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CustomNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenCounter;

    mapping(uint256 => string) private tokenPrompts;

    constructor() ERC721("CustomNFT", "CNFT") {}

function promptDescription()public pure returns(string memory des)
        {

           return( "animal children in rain old man cricket");
        }

    function mintToken(address receiver, string memory cid) external onlyOwner {
        uint256 tokenId = _tokenCounter.current();
        _mint(receiver, tokenId);
        tokenPrompts[tokenId] = cid;
        _tokenCounter.increment();
    }
}
