CREATE TABLE `sample_data` (
  `id` int(10) NOT NULL,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `age` varchar(30) NOT NULL,
  `gender` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `sample_data` (`id`, `first_name`, `last_name`, `age`, `gender`) VALUES
(1, 'John', 'Smith', '26', 'Male'),
(2, 'Donna', 'Hubber', '24', 'Female'),
(3, 'Peter', 'Parker', '28', 'Male'),
(4, 'Tom', 'Muddy', '32', 'Male'),
(6, 'Lisa', 'Ray', '26', 'Female');

ALTER TABLE `sample_data`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `sample_data`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;