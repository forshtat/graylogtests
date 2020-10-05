import winston from 'winston'
import WinstonGraylog2 from 'winston-graylog2'

const options = {
  name: 'Graylog',
  level: 'debug',
  // silent: false,
  // handleExceptions: false,
  graylog: {
    servers: [
      { host: 'localhost', port: 6666 },
      // { host: 'remote.host', port: 12201 }
    ],
    // hostname: 'myServer',
    // facility: 'myAwesomeApp',
    // bufferSize: 1400
  },
  // staticMeta: { env: 'staging' }
}

export const log = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format:
        winston.format.combine(
          winston.format.timestamp(),
          winston.format.colorize(),
          winston.format.simple()
        )
    }),
    new winston.transports.File({ filename: 'combined.log' }),
    new WinstonGraylog2(options),
  ]
})
