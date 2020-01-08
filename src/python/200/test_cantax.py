import cantax
import unittest

class TestCanTax(unittest.TestCase):
    def test_test(self):
        print("the test works correctly")

    def test_determine_taxes_owed(self):
        self.assertEqual(0.15, cantax.determine_taxes_owed(1, cantax.taxBrackets))
        self.assertEqual(0.3, cantax.determine_taxes_owed(2, cantax.taxBrackets))
        self.assertEqual(7630.35, cantax.determine_taxes_owed(50000, cantax.taxBrackets))
        self.assertEqual(18141.1, cantax.determine_taxes_owed(100000, cantax.taxBrackets))
        self.assertEqual(31211.1, cantax.determine_taxes_owed(150000, cantax.taxBrackets))
        self.assertEqual(61796.26, cantax.determine_taxes_owed(250000, cantax.taxBrackets))

if __name__ == '__main__':
    unittest.main()