const CONTRACT_ADDRESS = '0x36bb48b020847Bd25B658D74EbD201652d114756';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };

  export { CONTRACT_ADDRESS, transformCharacterData };