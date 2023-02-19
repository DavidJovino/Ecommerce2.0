import React from 'react';
import { useRouterContext, TitleProps } from '@pankod/refine-core';
import { Button } from '@pankod/refine-mui';

import { LOGOmini, LOGO_mini_img } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={LOGO_mini_img} alt="Deivao" width="28px" />
        ) : (
          <img src={LOGO_mini_img} alt="Refine" width="140px" />
        )}
      </Link>
    </Button>
  );
};
