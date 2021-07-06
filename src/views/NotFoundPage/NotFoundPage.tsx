import React, { useEffect } from 'react';
import { Paragraph } from 'theme/UI/Text/Text';
import { useHistory } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/404');
  }, []);

  return (
    <>
      <Paragraph>404</Paragraph>
    </>
  );
};
export default NotFoundPage;
