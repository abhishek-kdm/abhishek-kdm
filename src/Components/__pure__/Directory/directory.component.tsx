import React, {useContext} from 'react';

import File, { FileProps } from '../File/file.component';
import { faFolder, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { DesktopStateContext } from '../../Desktop/desktop.utils';
import { Open } from '../../../Utils';

interface DirectoryProps extends Omit<FileProps, 'faIcon' | 'Svg'> { }

const Directory: React.FC<DirectoryProps> = (props) => {
  const { windows } = useContext(DesktopStateContext) as DesktopState;
  const faIcon = (props?.windowId && Open(props?.windowId, windows)) ? faFolderOpen : faFolder;

  return <File {...props} fileType='dir' faIcon={faIcon} />;
}

export default Directory;
