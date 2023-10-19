import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <div className='bg-white mx-auto flex flex-wrap '>

      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <div key={index} className='w-[50%] p-3 flex flex-row flex-nowrap'>
          {item ? (
            <div className="w-[30%]">
              <img
                style={{ width: 210, height: 120 }}
                alt={item.title}
                src={item.src}

              />
            </div>
          ) : (
            <div className="w-[30%]">
              <Skeleton variant="rectangular" width={210} height={118} />
            </div>
          )}

          {item ? (
            <div className='w-[70%] flex flex-col justify-between' >
              <div className='w-100'>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </div>
              <div> {/* Button Group */}
                <button className='bg-red-500 text-white px-2 py-1 rounded-md outline-none'>O'chirish</button>
              </div>
            </div>
          ) : (
            <div className='w-[70%]'>
              <Skeleton width="50%" />
              <Skeleton />
            </div>
          )}

        </div>
      ))}

    </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading={false} />
      {/* <Media /> */}
    </Box>
  );
}