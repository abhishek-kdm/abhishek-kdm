import React from 'react';
import File, { FileProps } from '@/Components/__pure__/File/File.component';

interface DirectoryProps extends FileProps { }

const Directory: React.FC<DirectoryProps> = (p) => <File {...p} fileType='dir' />;

export default Directory;
