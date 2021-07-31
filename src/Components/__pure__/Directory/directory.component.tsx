import React from 'react';
import File, { FileProps } from '../File/file.component';

interface DirectoryProps extends FileProps {}

const Directory: React.FC<DirectoryProps> = (props) => {
  return <File {...props} fileType='dir' />;
};

export default Directory;
