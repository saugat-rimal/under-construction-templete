const img = path => `/img/${path}`;
const socialIcon = path => img(`socials/${path}`);

export default {
  socialIcons: {
    github: socialIcon("github.svg"),
    codepen: socialIcon("codepen.svg"),
    dev: socialIcon("dev.svg"),
    linkedin: socialIcon("linkedin.svg")
  }
};
