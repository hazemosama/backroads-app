const SocialIcon = ({ link, itemClass }) => {
  const { href, icon } = link;

  console.log(`itemClass is ${itemClass}`);

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={itemClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialIcon;
